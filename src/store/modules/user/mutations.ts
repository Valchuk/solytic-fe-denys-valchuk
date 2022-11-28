import { MutationTree } from 'vuex';
import * as types from './types';
import { UserState } from '@/store/modules/user/userState';

export default {
  [types.SET_CURRENT_USER_ID](state, id) {
    state.id = id;
  },
} as MutationTree<UserState>;
