export type PageSize = 'small' | 'medium' | 'large';
export type PageDisplayPagesPerPage = 5 | 10;
export type PagePages = string[];

export interface Props {
  size: PageSize;
  displayPagesPerPage: PageDisplayPagesPerPage;
  pages: PagePages;
}