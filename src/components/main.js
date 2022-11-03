import React, { useEffect } from 'react';
import $ from 'jquery';

(function() {
    "use strict";
    useEffect(() => {
        $(document).ready(function(){
          $("#header").removeClass('header-transparent');
        });
      }, []);
})()    
