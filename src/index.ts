/*!
  nativizer
  (C) TNTSuperMan 2024
*/
export default <T>(fn: ((...args: unknown[]) => T), strictLen?: boolean):
    (...args: unknown[])=>T =>fn
        .call
        .bind<(...args:unknown[])=>T>(
            function(
                this: unknown,
                ...args: unknown[]): T {
                return strictLen && this === undefined && args.length == 0 ?
                    fn() :
                    fn(this, ...args)
})
