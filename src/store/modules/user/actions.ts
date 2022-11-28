import { ActionTree } from 'vuex';
import gqlLogin from '@/apollo/queries/login.gql';
import { apolloClient } from '@/apollo';
import { SET_CURRENT_USER_ID } from './types';
import { UserState } from '@/store/modules/user/userState';

export default {
  /**
   * Login user
   */
  async login({ commit }, { email, password }): Promise<void> {
    const {
      data: {
        loginUser: { user },
      },
    } = await apolloClient.mutate({
      mutation: gqlLogin.mutations.login,
      variables: {
        user: {
          emailAddress: email,
          password,
        },
      },
    });

    if (user?.id) {
      commit(SET_CURRENT_USER_ID, user.id);
    }
  },
  /**
   * Logout user
   */
  async logout({ commit }): Promise<void> {
    commit(SET_CURRENT_USER_ID, undefined);
  },
} as ActionTree<UserState, never>;
