import Cookie from 'js-cookie'
// import { CognitoIdentityProviderClient} from "@aws-sdk/client-cognito-identity-provider";

const initialState = () => ({
  uploadManifestID: "",
  manifestFiles: [],
  cognitoConfig: {}
})

export const state = initialState()

export const mutations = {
    SET_COGNITO_CONFIG(state, config) {
        state.cognitoConfig = config    
    },
    ADD_FILES_TO_MANIFEST(state, files) {
        state.manifestFiles.push(...files)
    }
 
}

export const actions = {
    // Get AWS Credentials to upload data to the upload-bucket
    getCognitoConfig: async ({rootState, commit }, evt) => {
        const endpoint = `${rootState.config.apiUrl}/authentication/cognito-config`
    
        try {
            const resp = await fetch(endpoint).then(function(response) {
                return response.json();
              }).then(function(data) {
                commit('SET_COGNITO_CONFIG', data)
              });
        } catch(e) {
            throw new Error("Unable to get cognito-config.")
        }
    },
    // Add files to manifets 
    addManifestFiles: async({rootState, commit }, files, path) => {
        commit('ADD_FILES_TO_MANIFEST', files)
        
    },
    
}

export const getters = {}

const uploadModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

export default uploadModule
