import { gql } from "@apollo/client";
export const GET_ALL_REQUESTS_QUERY = gql`
  query GetAllRequests {
    getAllRequests {
      id
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
