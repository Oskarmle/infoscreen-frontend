import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/infoscreen/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/infoscreen/"!</div>
}
