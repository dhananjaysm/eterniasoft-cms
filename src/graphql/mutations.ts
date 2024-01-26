import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      access_token
      userId
    }
  }
`;

export const CREATE_PLAN_MUTATION = gql`
  mutation CreatePlan($planData: CreatePlanInput!) {
    createPlan(planData: $planData) {
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

export const UPDATE_PLAN_MUTATION = gql`
  mutation UpdatePlan($updatePlanId: String!, $planData: UpdatePlanInput!) {
    updatePlan(id: $updatePlanId, planData: $planData) {
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
        price
        description
        maxUsers
        createdAt
        updatedAt
      }
    }
  }
`;

export const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProduct($productData: CreateProductInput!) {
    createProduct(productData: $productData) {
      id
      name
      price
      description
      maxUsers
      productFeatures {
        id
        name
      }
    }
  }
`;

export const APPROVE_REQUEST_MUTATION = gql`
  mutation ApproveRequest(
    $approvalId: String!
    $approverId: String!
    $comments: String!
  ) {
    approveRequest(
      approvalId: $approvalId
      approverId: $approverId
      comments: $comments
    ) {
      id
      approved
      approverComments
      approver {
        id
        username
      }
      createdAt
      updatedAt
    }
  }
`;
