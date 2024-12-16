import { describe, it, expect } from "vitest";
import nativize from "../src/index"

describe("Test",()=>{
    const normal = nativize((...args)=>args)
    const strlen = nativize((...args)=>args, true)
    it("Normal",()=>{
        expect(normal(1,2,3)).toStrictEqual([1,2,3])
    })
    it("Empty",()=>{
        expect(normal()).toStrictEqual([undefined])
    })
    it("Normal_strictlen",()=>{
        expect(strlen(1,2,3)).toStrictEqual([1,2,3])
    })
    it("Empty_strictlen",()=>{
        expect(strlen()).toStrictEqual([])
    })
    it("Undefined_strictlen",()=>{
        expect(strlen(undefined)).toStrictEqual([])
    })
})