---
title: Functions
---

## Size
```scss
@function size($num) {
  @if type-of($num) == number {
    @if map-has-key($spaces, $num) {
      @return map-get($spaces, $num);
    } @else {
      @warn "#{$num} is not available";
      @return 0;
    }
  } @else {
    @warn "#{$num} is not a number";
    @return 0;
  }
}

// e.g.
.site-footer {
  padding-left: size(8);
  padding-right: size(8);
}
```

## Rem
```scss
@function rem($size) {
  @return $size / 14 * 1rem;
}
```
