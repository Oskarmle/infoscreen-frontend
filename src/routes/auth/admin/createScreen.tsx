import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/admin/createScreen')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/auth/admin/createScreen"!</div>
}
