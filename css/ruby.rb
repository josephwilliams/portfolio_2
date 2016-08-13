class Array
  def not_include?(el)
    self.each do |thing|
      return false if thing == el
    end

    true
  end
end


def censor(sentence, words)
  vowels = ['a', 'e', 'i', 'o', 'u']
  sentence = sentence.split(' ');
  sentence.map! do |word|
    word.chars.map! do |char|
      letter = char
      if vowels.include?(char)
        letter = "#"
      else
        letter
      end

      letter
    end
  end

  sentence.join(' ')
end

p censor("the dog walks", ['dog'])
