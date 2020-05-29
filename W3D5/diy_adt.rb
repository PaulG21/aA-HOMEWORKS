 #1-----------------------------------------------------------------------------
 class Stack #Last In Las Out

  attr_reader :array

    def initialize
      @array = []
    end

    def push(ele)
      array.push(ele)
    end

    def pop
      array.pop
    end

    def peek
      array.last
    end
  end

#2------------------------------------------------------------------------------
class Queue #First In First Out

  attr_reader :arr

  def initialize
    @arr= []
  end

  def enqueue(el)
    arr.push(el)
    el
  end

  def dequeue
    arr.shift
  end

  def peek
    arr.first
  end
end

#3------------------------------------------------------------------------------

class Map

  attr_reader :arr

  def initialize
    @arr = []
  end

  def set(key, value)
    pair_idx = arr.index { |pair| pair[0] == key }
    if pair_idx
      arr[pair_idx][1] = value
    else
      arr.push([key, value])
    end
    value
  end

  def get(key)
    arr.each { |pair| return pair[1] if pair[0] == key }
    nil
  end

  def delete(key)
    value = get(key)
    arr.reject! { |pair| pair[0] == key }
    value
  end

  def show
    deep_dup(arr)
  end
  
  def deep_dup(array)
    array.map do |ele| 
      if ele.is_a?(Array)
        deep_dup(ele)
      else
         ele 
      end
    end
  end  
end
