# The Material-UI Button with more color options

## Description

A Generic, extendible Carousel UI component for React using [Material UI](https://material-ui.com/)

## Live Demo

Take a look at [Live Demo](http://hamidreza-nateghi.github.io/mui-button)

## Installation

```shell
npm install mui-button --save
```

**Note:**

You will need to have `material-ui` installed, in order to use this component

```shell
npm install @material-ui/core
```

## Usage Example

```jsx
import React from "react";
import Button from "mui-button";

function Example() {
  return (
    <Button color="error" variant="outlined">
      Submit
    </Button>
  );
}
```

## Props

| Name  | Type                                                                                             | Default   | Description |     |
| ----- | ------------------------------------------------------------------------------------------------ | --------- | ----------- | --- |
| color | 'inherit' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success' \| 'info' \| 'default | 'primary' | The color   |     |
|       |                                                                                                  |           |             |     |
|       |                                                                                                  |           |             |     |

## License

The MIT License.

## Author

[Hamidreza Nateghi](http://hamidreza-nateghi.github.io)
