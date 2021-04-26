interface ExternalAccount {
  providerType: string;
}

export interface User {
  id: string | undefined;
  username: string | null;
  mailAddress: string | null;
  password: string | null;
  nickname: string;
  description: string | null;
  externalAccount: ExternalAccount | undefined;
}
