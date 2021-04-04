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

// .section that has more padding on medium and larger devices
.section {
  padding-left: 1rem;
  padding-right: 1rem;

  @include screen(md) {
    padding-left: 2rem;
    padding-right: 2rem;
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

// .button stays on one line (does not line break) and text gets truncated with ellipsis
.button {
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

## Placeholder color
```scss
@mixin placeholder-color($color) {
  /* stylelint-disable selector-no-vendor-prefix */
  &::-webkit-input-placeholder {
    color: $color;
  }

  &:-moz-placeholder {
    color: $color;
  }

  &::-moz-placeholder {
    color: $color;
  }

  &:-ms-input-placeholder {
    color: $color;
  }
  /* stylelint-enable selector-no-vendor-prefix */
}
```
