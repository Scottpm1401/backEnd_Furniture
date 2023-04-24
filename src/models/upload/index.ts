export type GetSignatureType = {
  public_id?: string;
  folder?: string;
};

export type SignedUpload = {
  signature: string;
  timestamp: number;
};
