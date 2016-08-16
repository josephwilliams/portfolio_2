# files = {
#  'a' => {
#    'b' => {
#      'c' => {
#        'd' => {
#          'e' => true
#        },
#        'f' => true
#      }
#    }
#  }
# }


files2 = {
  'a' => true
}

files1 = { 'a' => { 'b' => true } }

def stringifile(hash)
  hash.each do |k,v|
    if v == true
      return k
    else
      stringifile(v)
    end
  end
end

p stringifile(files1)
