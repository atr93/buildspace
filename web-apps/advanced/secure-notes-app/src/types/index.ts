export type PlainNote = {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
};

export type StoredNote = {
  id: string;
  title: string;
  encryptedContent: string;
  iv: string;
  updatedAt: string;
};

export type SecurePayload = {
  version: 1;
  salt: string;
  notes: StoredNote[];
};
