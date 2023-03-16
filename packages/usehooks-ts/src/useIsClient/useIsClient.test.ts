import { renderHook } from '@testing-library/react'

import { useIsClient } from './useIsClient'

describe('useIsClient()', () => {
  it('should be false when rendering on the server', () => {
    const { result } = renderHook(() => useIsClient(), {
      hydrate: false, // Disable hydration for server rendering
    })
    expect(result.current).toBe(false)
  })

  it('should be true when after hydration', () => {
    const { result, hydrate } = renderHook(() => useIsClient(), {
      hydrate: true, // Enable hydration for client rendering
    })
    hydrate()
    expect(result.current).toBe(true)
  })

  it('should be true when rendering on the client', () => {
    const { result } = renderHook(() => useIsClient(), {
      hydrate: true, // Enable hydration for client rendering
    })
    expect(result.current).toBe(true)
  })
})
