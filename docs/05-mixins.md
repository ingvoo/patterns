---
title: Mixins
---

## Screen
```scss
@mixin screen($name) {
  @if map-has-key($breakpoints, $name) {
    @media (min-width: #{map-get($breakpoints, $name)}) {
      @content;
    }
  } @else {
    @error "There is no breakpoint called #{$name}";
  }
}

// .section that has more padding on medium and larget devices
.section {
  padding-left: 1rem;
  padding-right: 1rem;

  @include screen(md) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
```

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

## Truncate

```scss
@mixin truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

// .btn stays on one line (does not line break) and text gets truncated with ellipsis
.btn {
  @include truncate;
}
```

## Visually hidden

```scss
@mixin visually-hidden {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}
```
