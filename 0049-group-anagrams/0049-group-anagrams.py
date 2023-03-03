class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        if (len(strs) <= 1): return [strs]
        results = []
        grouped = [None]*(len(strs))
        def createDict(input_str):
            dict = {}
            for char in input_str:
                dict.update({char: (dict.setdefault(char, 0) + 1)})
            return dict
        for dict_index, dict_string in enumerate(strs):
            if grouped[dict_index] == True: continue
            grouped[dict_index] = True
            curr_results = [dict_string]
            if dict_index == len(strs) - 1 and len(curr_results) == 1:
                results.append(curr_results)
                break
            dict = createDict(dict_string)
            for index, string in enumerate(strs[dict_index + 1:], dict_index + 1):
                if len(dict_string) != len(string): continue
                if grouped[index] == True: continue
                if string in curr_results:
                    curr_results.append(string)
                    grouped[index] = True
                    continue
                if len(dict_string) == 0: break
                dict_copy = dict.copy()
                for i, char in enumerate(string):
                    count = dict_copy.setdefault(char,0)
                    if count == 0:
                        break
                    else: dict_copy.update({char: count - 1})
                    if i == len(string) - 1: 
                        grouped[index] = True
                if grouped[index] == True:
                    curr_results.append(string)
            results.append(curr_results)
        return results


