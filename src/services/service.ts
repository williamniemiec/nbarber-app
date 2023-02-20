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
