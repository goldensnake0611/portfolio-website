import { Component, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

type State = {
  error?: Error;
};

export default class ErrorBoundary extends Component<Props, State> {
  state: State = {};

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-cream text-dark flex items-center justify-center px-6">
          <div className="max-w-xl w-full bg-white rounded-3xl p-8 shadow-soft-lg border border-blush-50">
            <h1 className="text-3xl font-serif text-dark-accent mb-3">Something went wrong</h1>
            <p className="text-dark-muted font-light leading-relaxed mb-6">
              The app failed to render due to a runtime error. Open DevTools → Console to see the exact message.
            </p>
            <div className="text-sm bg-blush-50 border border-blush-100 rounded-2xl p-4 text-dark-muted whitespace-pre-wrap break-words">
              {this.state.error.message}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
