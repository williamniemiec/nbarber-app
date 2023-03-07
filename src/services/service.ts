/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ApiConfig from '../config/api.config';


/**
 * Responsible for providing services for some resource.
 */
abstract class Service {

    // ------------------------------------------------------------------------
    //         Attributes
    // ------------------------------------------------------------------------
    protected readonly api: string;


    // ------------------------------------------------------------------------
    //         Constructor
    // ------------------------------------------------------------------------
    public constructor() {
        this.api = ApiConfig.BASE_URL;
    }


    // ------------------------------------------------------------------------
    //         Methods
    // ------------------------------------------------------------------------
    get() {

    }

    post() {

    }

    put() {

    }

    delete() {

    }
}

export default Service;
