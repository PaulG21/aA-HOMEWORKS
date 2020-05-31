require 'set'

class GraphNode
  attr_accessor :value, :neighbors

  def initialize(value)
    @value = value
    @neighbors = []
  end

  def add_neighbor(node)
    neighbors << node
  end
end

def bfs(node, target)
  queue = [node]
  visited = Set.new()

  until queue.empty?
    current_node = queue.shift
    unless visited.include?(current_node)
      return current_node.value if current_node.value == target
      visited.add(current_node)
      queue += current_node.neighbors
    end
  end
  
  return nil
end


# a = GraphNode.new('a')
# b = GraphNode.new('b')
# c = GraphNode.new('c')
# d = GraphNode.new('d')
# e = GraphNode.new('e')
# f = GraphNode.new('f')

# a.add_neighbor(b)
# a.add_neighbor(c)
# a.add_neighbor(e)
# c.add_neighbor(b)
# c.add_neighbor(d)
# e.add_neighbor(a)
# f.add_neighbor(e)

# p bfs(a, "f") # ==> nil
#p bfs(a, "b") # ==> "b"