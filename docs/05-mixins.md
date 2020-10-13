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
  padding-left: size(8);
  padding-right: size(8);

  @include screen(md) {
    padding-left: size(8);
    padding-right: size(8);
  }
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
