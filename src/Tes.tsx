import type { Component } from 'solid-js';

import {
    HopeProvider,Box
  } from "@hope-ui/solid";
  
export default function (Tes: Component ) {
    return (<HopeProvider><Box>test</Box></HopeProvider>)
}