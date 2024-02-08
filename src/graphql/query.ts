import { gql } from "@apollo/client";

export const GET_USER_PROFILE_QUERY = gql`
  query FindUserById($userId: String!) {
    findUserById(userId: $userId) {
      id
      username
      email
      firstName
      lastName
      department
      roles
    }
  }
`;

export const GET_COMPLETE_USER_PROFILE = gql`
query FindUserById($userId: String!) {
  findUserById(userId: $userId) {
    id
    username
    email
    firstName
    lastName
    department
    roles
    subscriptions {
      id
      subscriptionType
      status
      plan {
        id
        name
        description
        price
        duration
        status
        billingCycle
        autoRenew
        trialPeriodDays
        products {
          id
          name
          price
          description
          maxUsers
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      startDate
      endDate
      renewalPeriod
    }
    createdAt
    updatedAt
  }
}
`

export const GET_ALL_REQUESTS_QUERY = gql`
  query GetAllRequests {
    getAllRequests {
      id
      requestId
      type
      user {
        id
      }
      package {
        id
      }
      approvals {
        id
      }
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_REQUESTS_COUNT_QUERY = gql`
  query Query {
    requestsCount
  }
`;

export const GET_ALL_USERS_QUERY = gql`
  query FindAllUser {
    findAllUser {
      id
      username
      email
      firstName
      lastName
      department
      roles
    }
  }
`;

export const GET_USERS_COUNT_QUERY = gql`
  query Query {
    usersCount
  }
`;

export const GET_SUBS_COUNT_QUERY = gql`
  query Query {
    subsCount
  }
`;
export const GET_SUBS_BY_DATERANGE = gql`
  query GetSubscriptionsByDateRange(
    $startDate: DateTime!
    $endDate: DateTime!
  ) {
    getSubscriptionsByDateRange(startDate: $startDate, endDate: $endDate) {
      id
      subscriptionType
      status
      startDate
      endDate
    }
  }
`;

export const GET_PLAN_QUERY = gql`
  query FindPlan($planId: String!) {
    findPlan(planId: $planId) {
      id
      name
      description
      price
      duration
      status
      billingCycle
      autoRenew
      trialPeriodDays
      createdAt
      updatedAt
      products {
        id
        name
      }
    }
  }
`;

export const GET_ALL_PLANS = gql`
  query FindPlans {
    findPlans {
      id
      name
      description
      price
      duration
      status
      billingCycle
      autoRenew
      trialPeriodDays
      createdAt
      updatedAt
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query FindProducts {
    findProducts {
      id
      name
      price
      description
      maxUsers
      productFeatures {
        id
        name
      }
      createdAt
    }
  }
`;

export const GET_ALL_USERS = gql`
  query FindAllUsers {
    findAllUsers {
      id
      username
      email
      firstName
      lastName
      department
      roles
      createdAt
      updatedAt
    }
  }
`;

export const GET_ALL_REQUESTS = gql`
  query GetAllRequests {
    getAllRequests {
      id
      requestType
      user {
        id
        email
        username
      }
      plan {
        id
        name
      }

      approvals {
        id
        approved
        approver {
          id
          email
          username
        }
      }
      status
      createdAt
      updatedAt
    }
  }
`;
