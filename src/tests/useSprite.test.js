import { renderHook, act } from '@testing-library/react-hooks';
import useSprite from '../hooks/useSprite';

describe('must use the useSprite hook', () => {
  test('should handle toggling', () => {
    const { result } = renderHook(() => useSprite(true));
    act(() => result.current.changeSprite());
    expect(result.current.sprite).toEqual(false);
    act(() => result.current.changeSprite());
    expect(result.current.sprite).toEqual(true);
  });
});
