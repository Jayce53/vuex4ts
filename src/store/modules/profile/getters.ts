import {GetterTree} from "vuex";

// eslint-disable-next-line import/no-cycle
import {RootState} from "@/store";
import type {UserProfileName, UserRoles} from "@/@types";

import {State} from "./state";

export type Getters = {
  profile(state: State): UserProfileName;
  roles(state: State): UserRoles;
  isClient(state: State): boolean;
  isAdmin(state: State): boolean;
}

export const getters: GetterTree<State, RootState> & Getters = {
  profile  : (state) => state.profileData,
  roles    : (state) => state.rolesData,
  isClient : (state) => state.profileData === "client",
  isAdmin  : (state) => state.profileData === "admin",
};
