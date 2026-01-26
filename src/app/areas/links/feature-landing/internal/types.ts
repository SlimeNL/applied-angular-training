export type ResourceLink = {
  href: string;
  label: string;
};
export type Resource = {
  id: string;
  title: string;
  description: string;
  primaryLink: ResourceLink;
  additionalLinks?: ResourceLink[];
};
