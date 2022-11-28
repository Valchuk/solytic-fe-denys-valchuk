import { GetterTree } from 'vuex';
import { UserState } from '@/store/modules/user/userState';

export default {
  getUserId(state): number | undefined {
    return state.id;
  },
} as GetterTree<UserState, never>;
