class Graph:
    def __init__ (self, vertices):
        self.V = vertices
        self.graph = [[0 for _ in range(vertices)] for _ in range(vertices)]

    def addEdge(self, u, v):
        self.graph[u][v] = 1
        self.graph[v][u] = 1

    def DFSUtil(self, v, visited):
        visited[v] = True
        for i in range(self.V):
            if self.graph[v][i] == 1 and not visited[i]:
                self.DFSUtil(i, visited)
                
                        