import { mount, createLocalVue } from '@vue/test-utils';
import OrganismLogin from '@/components/organisms/OrganismLogin.vue';
import VueFormulate from '@braid/vue-formulate';
import flushPromises from 'flush-promises';
import { RouterLinkStub } from '@vue/test-utils';
import Vuex from 'vuex';
import { APP_ROUTER_PATHS } from '@/app-constants';
import VModal from 'vue-js-modal';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('OrganismLogin.vue', () => {
  it('Check login form', async () => {
    const loginActionMock = jest.fn(() => Promise.resolve());
    const routerPushMock = jest.fn();
    const store = new Vuex.Store({
      modules: {
        user: {
          actions: {
            login: loginActionMock,
          },
        },
      },
    });

    localVue.use(VueFormulate);
    localVue.use(VModal, { dialog: true });

    const wrapper = mount(OrganismLogin, {
      localVue,
      stubs: {
        RouterLink: RouterLinkStub,
      },
      store,
      mocks: {
        $router: {
          push: routerPushMock,
        },
      },
    });
    const form = wrapper.find('form');
    const emailField = form.find('input[name=email]');
    const passwordField = form.find('input[name=password]');
    const submitButton = wrapper.find('[type="submit"]');

    emailField.setValue('');
    emailField.trigger('blur');
    await flushPromises();

    // Test is submit button disabled
    expect(submitButton.attributes().disabled).toBeDefined();

    // Test empty email field
    expect(wrapper.find('.formulate-input-error').text()).toContain('Email is required.');

    // Test if error exist with correct field value
    emailField.setValue('test@test.com');
    emailField.trigger('blur');
    passwordField.setValue('qwerty123');
    passwordField.trigger('blur');
    await flushPromises();

    // Test if error exist with correct field value
    expect(wrapper.find('.formulate-input-error').exists()).toBe(false);

    await form.trigger('submit');
    await flushPromises();

    // Test if login action have been called
    expect(loginActionMock).toHaveBeenCalled();

    // Test if router push have been called
    expect(routerPushMock).toHaveBeenCalledWith(APP_ROUTER_PATHS.userDetails);
  });
});
