interface ExternalAccount {
  providerType: string;
}

export interface User {
  id?: string
  username: string
  mailAddress: string
  password: string
  nickname: string
  description: string
  externalAccount?: ExternalAccount
}
