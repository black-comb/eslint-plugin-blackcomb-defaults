# 03.01.2026: v2.1.2

* javascript rules: Define max-len property for import-newlines/enforce to align with @stylistic/max-len.

# 31.12.2025: v2.1.1

* Restrict configurations to the respective file types.

# 07.09.2025: v2.1.0

* ESLint configs are now created using the defineConfig helper function from eslint/config instead of config from typescript-eslint.
* Minor dependency version updates.
* Note: The following message may pop up during linting:
  
  > [@stylistic/eslint-plugin]: You are using deprecated option("allowNodesInSpreadElement") in "no-extra-parens", please use "ignoreNodes" instead.
  
  This is due to a bug in @stylistic/eslint-plugin 5.3.1 appearing in combination with the eslint-plugin-blackcomb-defaults configuration and can safely be ignored.

# 27.08.2025: v2.0.1

* Minor dependency version updates.
* Angular configuration: Set new-cap.capIsNew to false because, otherwise, the rule shows an error when using Angular decorators such as @Injectable.
