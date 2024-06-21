import { create } from 'zustand';
import { appWindow } from '@tauri-apps/api/window';

interface WindowState {
  isFocused: boolean;
}

const useWindowState = create<WindowState>()(() => ({
  isFocused: true,
}));

const eventListener = async () => {
  await appWindow.onFocusChanged(({ payload }) => {
    useWindowState.setState({ isFocused: payload });
  });
  // await appWindow.onMoved(() => useWindowState.setState({ isFocused: true }));
};

eventListener();
export default useWindowState;
