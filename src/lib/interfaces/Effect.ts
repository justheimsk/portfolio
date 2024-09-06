export interface Effect {
  init: () => void;
  resize: () => void;
}
