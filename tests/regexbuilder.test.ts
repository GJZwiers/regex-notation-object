import { expect } from 'chai';
import { Regex } from '../src/regexbuilder/RegexBuilder';

describe('RegexBuilder', () => {
    it('should adds any group other than named group correctly with group()', () => {
        expect(Regex.new().group('cg', 'foo').build()).to.eql(/(foo)/);
        expect(Regex.new().group('ncg', 'foo').build()).to.eql(/(?:foo)/);
        expect(Regex.new().group('la', 'foo').build()).to.eql(/(?=foo)/);
        expect(Regex.new().group('lb', 'foo').build()).to.eql(/(?<=foo)/);
        expect(Regex.new().group('nla', 'foo').build()).to.eql(/(?!foo)/);
        expect(Regex.new().group('nlb', 'foo').build()).to.eql(/(?<!foo)/);
    });
    it("should add a capturing group correctly with capturing()", () => {
        expect(Regex.new().capture('foo').build()).to.eql(/(foo)/);
    });
    it("should add named group correctly", () => {
        expect(Regex.new().namedGroup('foo', 'bar').build()).to.eql(/(?<foo>bar)/);
    });
    it("should compile a build to a pattern correctly", () => {
        expect(Regex.new().add('foo').build()).to.eql(/foo/);
    });
    it("should throw when building an invalid pattern", () => {
        expect(() => {
            return Regex.new().add('(foo').build();
        }).to.throw();
    });
    it("should add flags correctly", () => {
        expect(Regex.new().add('foo').flags('gi').build()).to.eq;(/foo/gi);
    });
});
