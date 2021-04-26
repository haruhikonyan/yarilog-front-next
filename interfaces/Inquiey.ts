export interface InquiryType {
  id: number;
  type: string;
  sortOrder: number;
}
export interface Inquiry {
  content: string;
  mailAddress?: string;
  inquiryType: InquiryType;
}
