import gql from 'graphql-tag';

const LOGIN = gql`
  mutation Login($user: UserLoginInput!) {
    loginUser(user: $user) {
      user {
        id
      }
      accessToken {
        token
        tokenType
      }
    }
  }
`;

export default {
  mutations: {
    login: LOGIN,
  },
};
