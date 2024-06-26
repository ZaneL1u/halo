/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { Category } from '../models';
// @ts-ignore
import { CategoryList } from '../models';
/**
 * ContentHaloRunV1alpha1CategoryApi - axios parameter creator
 * @export
 */
export const ContentHaloRunV1alpha1CategoryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create content.halo.run/v1alpha1/Category
         * @param {Category} [category] Fresh category
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createcontentHaloRunV1alpha1Category: async (category?: Category, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/content.halo.run/v1alpha1/categories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(category, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete content.halo.run/v1alpha1/Category
         * @param {string} name Name of category
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletecontentHaloRunV1alpha1Category: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deletecontentHaloRunV1alpha1Category', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/categories/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get content.halo.run/v1alpha1/Category
         * @param {string} name Name of category
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getcontentHaloRunV1alpha1Category: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getcontentHaloRunV1alpha1Category', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/categories/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List content.halo.run/v1alpha1/Category
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listcontentHaloRunV1alpha1Category: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/content.halo.run/v1alpha1/categories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update content.halo.run/v1alpha1/Category
         * @param {string} name Name of category
         * @param {Category} [category] Updated category
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatecontentHaloRunV1alpha1Category: async (name: string, category?: Category, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updatecontentHaloRunV1alpha1Category', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/categories/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(category, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ContentHaloRunV1alpha1CategoryApi - functional programming interface
 * @export
 */
export const ContentHaloRunV1alpha1CategoryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContentHaloRunV1alpha1CategoryApiAxiosParamCreator(configuration)
    return {
        /**
         * Create content.halo.run/v1alpha1/Category
         * @param {Category} [category] Fresh category
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createcontentHaloRunV1alpha1Category(category?: Category, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Category>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createcontentHaloRunV1alpha1Category(category, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContentHaloRunV1alpha1CategoryApi.createcontentHaloRunV1alpha1Category']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete content.halo.run/v1alpha1/Category
         * @param {string} name Name of category
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletecontentHaloRunV1alpha1Category(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletecontentHaloRunV1alpha1Category(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContentHaloRunV1alpha1CategoryApi.deletecontentHaloRunV1alpha1Category']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get content.halo.run/v1alpha1/Category
         * @param {string} name Name of category
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getcontentHaloRunV1alpha1Category(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Category>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getcontentHaloRunV1alpha1Category(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContentHaloRunV1alpha1CategoryApi.getcontentHaloRunV1alpha1Category']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List content.halo.run/v1alpha1/Category
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listcontentHaloRunV1alpha1Category(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listcontentHaloRunV1alpha1Category(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContentHaloRunV1alpha1CategoryApi.listcontentHaloRunV1alpha1Category']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update content.halo.run/v1alpha1/Category
         * @param {string} name Name of category
         * @param {Category} [category] Updated category
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatecontentHaloRunV1alpha1Category(name: string, category?: Category, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Category>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatecontentHaloRunV1alpha1Category(name, category, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContentHaloRunV1alpha1CategoryApi.updatecontentHaloRunV1alpha1Category']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ContentHaloRunV1alpha1CategoryApi - factory interface
 * @export
 */
export const ContentHaloRunV1alpha1CategoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContentHaloRunV1alpha1CategoryApiFp(configuration)
    return {
        /**
         * Create content.halo.run/v1alpha1/Category
         * @param {ContentHaloRunV1alpha1CategoryApiCreatecontentHaloRunV1alpha1CategoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createcontentHaloRunV1alpha1Category(requestParameters: ContentHaloRunV1alpha1CategoryApiCreatecontentHaloRunV1alpha1CategoryRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Category> {
            return localVarFp.createcontentHaloRunV1alpha1Category(requestParameters.category, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete content.halo.run/v1alpha1/Category
         * @param {ContentHaloRunV1alpha1CategoryApiDeletecontentHaloRunV1alpha1CategoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletecontentHaloRunV1alpha1Category(requestParameters: ContentHaloRunV1alpha1CategoryApiDeletecontentHaloRunV1alpha1CategoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deletecontentHaloRunV1alpha1Category(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get content.halo.run/v1alpha1/Category
         * @param {ContentHaloRunV1alpha1CategoryApiGetcontentHaloRunV1alpha1CategoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getcontentHaloRunV1alpha1Category(requestParameters: ContentHaloRunV1alpha1CategoryApiGetcontentHaloRunV1alpha1CategoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<Category> {
            return localVarFp.getcontentHaloRunV1alpha1Category(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List content.halo.run/v1alpha1/Category
         * @param {ContentHaloRunV1alpha1CategoryApiListcontentHaloRunV1alpha1CategoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listcontentHaloRunV1alpha1Category(requestParameters: ContentHaloRunV1alpha1CategoryApiListcontentHaloRunV1alpha1CategoryRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<CategoryList> {
            return localVarFp.listcontentHaloRunV1alpha1Category(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Update content.halo.run/v1alpha1/Category
         * @param {ContentHaloRunV1alpha1CategoryApiUpdatecontentHaloRunV1alpha1CategoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatecontentHaloRunV1alpha1Category(requestParameters: ContentHaloRunV1alpha1CategoryApiUpdatecontentHaloRunV1alpha1CategoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<Category> {
            return localVarFp.updatecontentHaloRunV1alpha1Category(requestParameters.name, requestParameters.category, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createcontentHaloRunV1alpha1Category operation in ContentHaloRunV1alpha1CategoryApi.
 * @export
 * @interface ContentHaloRunV1alpha1CategoryApiCreatecontentHaloRunV1alpha1CategoryRequest
 */
export interface ContentHaloRunV1alpha1CategoryApiCreatecontentHaloRunV1alpha1CategoryRequest {
    /**
     * Fresh category
     * @type {Category}
     * @memberof ContentHaloRunV1alpha1CategoryApiCreatecontentHaloRunV1alpha1Category
     */
    readonly category?: Category
}

/**
 * Request parameters for deletecontentHaloRunV1alpha1Category operation in ContentHaloRunV1alpha1CategoryApi.
 * @export
 * @interface ContentHaloRunV1alpha1CategoryApiDeletecontentHaloRunV1alpha1CategoryRequest
 */
export interface ContentHaloRunV1alpha1CategoryApiDeletecontentHaloRunV1alpha1CategoryRequest {
    /**
     * Name of category
     * @type {string}
     * @memberof ContentHaloRunV1alpha1CategoryApiDeletecontentHaloRunV1alpha1Category
     */
    readonly name: string
}

/**
 * Request parameters for getcontentHaloRunV1alpha1Category operation in ContentHaloRunV1alpha1CategoryApi.
 * @export
 * @interface ContentHaloRunV1alpha1CategoryApiGetcontentHaloRunV1alpha1CategoryRequest
 */
export interface ContentHaloRunV1alpha1CategoryApiGetcontentHaloRunV1alpha1CategoryRequest {
    /**
     * Name of category
     * @type {string}
     * @memberof ContentHaloRunV1alpha1CategoryApiGetcontentHaloRunV1alpha1Category
     */
    readonly name: string
}

/**
 * Request parameters for listcontentHaloRunV1alpha1Category operation in ContentHaloRunV1alpha1CategoryApi.
 * @export
 * @interface ContentHaloRunV1alpha1CategoryApiListcontentHaloRunV1alpha1CategoryRequest
 */
export interface ContentHaloRunV1alpha1CategoryApiListcontentHaloRunV1alpha1CategoryRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof ContentHaloRunV1alpha1CategoryApiListcontentHaloRunV1alpha1Category
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof ContentHaloRunV1alpha1CategoryApiListcontentHaloRunV1alpha1Category
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof ContentHaloRunV1alpha1CategoryApiListcontentHaloRunV1alpha1Category
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof ContentHaloRunV1alpha1CategoryApiListcontentHaloRunV1alpha1Category
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof ContentHaloRunV1alpha1CategoryApiListcontentHaloRunV1alpha1Category
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for updatecontentHaloRunV1alpha1Category operation in ContentHaloRunV1alpha1CategoryApi.
 * @export
 * @interface ContentHaloRunV1alpha1CategoryApiUpdatecontentHaloRunV1alpha1CategoryRequest
 */
export interface ContentHaloRunV1alpha1CategoryApiUpdatecontentHaloRunV1alpha1CategoryRequest {
    /**
     * Name of category
     * @type {string}
     * @memberof ContentHaloRunV1alpha1CategoryApiUpdatecontentHaloRunV1alpha1Category
     */
    readonly name: string

    /**
     * Updated category
     * @type {Category}
     * @memberof ContentHaloRunV1alpha1CategoryApiUpdatecontentHaloRunV1alpha1Category
     */
    readonly category?: Category
}

/**
 * ContentHaloRunV1alpha1CategoryApi - object-oriented interface
 * @export
 * @class ContentHaloRunV1alpha1CategoryApi
 * @extends {BaseAPI}
 */
export class ContentHaloRunV1alpha1CategoryApi extends BaseAPI {
    /**
     * Create content.halo.run/v1alpha1/Category
     * @param {ContentHaloRunV1alpha1CategoryApiCreatecontentHaloRunV1alpha1CategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentHaloRunV1alpha1CategoryApi
     */
    public createcontentHaloRunV1alpha1Category(requestParameters: ContentHaloRunV1alpha1CategoryApiCreatecontentHaloRunV1alpha1CategoryRequest = {}, options?: RawAxiosRequestConfig) {
        return ContentHaloRunV1alpha1CategoryApiFp(this.configuration).createcontentHaloRunV1alpha1Category(requestParameters.category, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete content.halo.run/v1alpha1/Category
     * @param {ContentHaloRunV1alpha1CategoryApiDeletecontentHaloRunV1alpha1CategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentHaloRunV1alpha1CategoryApi
     */
    public deletecontentHaloRunV1alpha1Category(requestParameters: ContentHaloRunV1alpha1CategoryApiDeletecontentHaloRunV1alpha1CategoryRequest, options?: RawAxiosRequestConfig) {
        return ContentHaloRunV1alpha1CategoryApiFp(this.configuration).deletecontentHaloRunV1alpha1Category(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get content.halo.run/v1alpha1/Category
     * @param {ContentHaloRunV1alpha1CategoryApiGetcontentHaloRunV1alpha1CategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentHaloRunV1alpha1CategoryApi
     */
    public getcontentHaloRunV1alpha1Category(requestParameters: ContentHaloRunV1alpha1CategoryApiGetcontentHaloRunV1alpha1CategoryRequest, options?: RawAxiosRequestConfig) {
        return ContentHaloRunV1alpha1CategoryApiFp(this.configuration).getcontentHaloRunV1alpha1Category(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List content.halo.run/v1alpha1/Category
     * @param {ContentHaloRunV1alpha1CategoryApiListcontentHaloRunV1alpha1CategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentHaloRunV1alpha1CategoryApi
     */
    public listcontentHaloRunV1alpha1Category(requestParameters: ContentHaloRunV1alpha1CategoryApiListcontentHaloRunV1alpha1CategoryRequest = {}, options?: RawAxiosRequestConfig) {
        return ContentHaloRunV1alpha1CategoryApiFp(this.configuration).listcontentHaloRunV1alpha1Category(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update content.halo.run/v1alpha1/Category
     * @param {ContentHaloRunV1alpha1CategoryApiUpdatecontentHaloRunV1alpha1CategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentHaloRunV1alpha1CategoryApi
     */
    public updatecontentHaloRunV1alpha1Category(requestParameters: ContentHaloRunV1alpha1CategoryApiUpdatecontentHaloRunV1alpha1CategoryRequest, options?: RawAxiosRequestConfig) {
        return ContentHaloRunV1alpha1CategoryApiFp(this.configuration).updatecontentHaloRunV1alpha1Category(requestParameters.name, requestParameters.category, options).then((request) => request(this.axios, this.basePath));
    }
}

