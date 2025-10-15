'use client'

import { PostItem } from '@/config/post'

export function ComponentPreview({ component }: { component: PostItem }) {
  const Component = component.component
  return <Component />
}