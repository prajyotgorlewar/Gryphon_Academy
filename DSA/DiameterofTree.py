def findTreeDiameter(root):
    diameter=0
    left_depth = 0
    right_depth = 0
    def dfs(node):
        if not node:
            return 0, 0 

        left_depth, left_diameter = dfs(node.left)
        right_depth, right_diameter = dfs(node.right)

        max_depth = max(left_depth, right_depth) + 1
        diameter = max(left_diameter, right_diameter, left_depth + right_depth)

        return max_depth, diameter

    diameter = dfs(root)
    return diameter

