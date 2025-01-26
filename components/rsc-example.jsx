import { ClientServerIndicator } from './client-server-indicaror';

export function RSC_Example() {
  return <>
    Server only: {process.versions.node} <ClientServerIndicator/>
  </>
}