import * as React from 'react';

/** Blog post card. Thumb is optional and bleeds full-width when present. */
export interface PostCardProps {
  title: React.ReactNode;
  date?: React.ReactNode;
  thumb?: string;
  href?: string;
  more?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function PostCard(props: PostCardProps): JSX.Element;
