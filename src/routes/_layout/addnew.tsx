import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/addnew')({
  component: () => <div>Hello /_layout/addnew!</div>
})