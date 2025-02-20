declare global {
  namespace GearsTypes {
    export interface GearsProps {
      reverse?: Record<string, unknown> | object
      forward?: Record<string, unknown> | object
      pattern?: string
    }

    export interface GearsState {
      reverse?: Record<string, unknown> | object
      forward?: Record<string, unknown> | object
    }

    export namespace Reverse {
      export interface ReverseProps {
        pathname: string
      }
    }

    export namespace Forward {
      export interface ForwardProps {
        pathname: string
      }
    }
  }
}

export {}
