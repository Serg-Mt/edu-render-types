export function ClientServerIndicator() {
  return <span suppressHydrationWarning>
    {'process' in globalThis && '🖥'}
    {'window' in globalThis && '👽'}
  </span>
}