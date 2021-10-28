// Nguyễn Đào Quang Tuấn_19020476

$(document).ready(function() {

  // Thêm row mới
  $('#addRow').click(function() {
    let name = $('#name').val()
    let daySkip = $('#daySkip').val()
    let midPoint = $('#midPoint').val()
    let finalPoint = $('#finalPoint').val()
    
    if (!name) {
      alert('Họ tên chưa có giá trị!')
    } else if (!daySkip) {
      alert('Số buổi vắng chưa có giá trị')
    } else if (!midPoint) {
      alert('Điểm giữa kì chưa có giá trị')
    } else if (!finalPoint) {
      alert('Điểm cuối kì chưa có giá trị')
    } else if (daySkip < 0 || daySkip > 14) {
      alert('Số buổi vắng phải có giá trị thuộc đoạn [0, 14]')
    } else if (midPoint < 0 || midPoint > 10) {
      alert('Điểm giữa kì phải có giá trị thuộc đoạn [0, 10]')
    } else if (finalPoint < 0 || finalPoint > 10) {
      alert('Điểm cuối kì phải có giá trị thuộc đoạn [0, 10]')
    } else {
      let row = $('<tr class="content"></tr>')

      let col1 = $('<td></td>').text(name)
      let col2 = $('<td></td>').text(daySkip)
      let col3 = $('<td></td>').text(midPoint)
      let col4 = $('<td></td>').text(finalPoint)
      let col5 = $('<td></td>')
      let col6 = $('<td></td>')

      row.append(col1, col2, col3, col4, col5, col6)
      $('#table').append(row)

      let calButton = $('#calButton')
      if ($('table').find('tr:gt(0)').toArray().length > 0) {
        calButton.prop('disabled', false)
      } else {
        calButton.prop('disabled', true)
      }
    }
  })

  $('#calButton').click(() => {
    handleclick()
  })

})

function handleclick() {
  let rows = $('#table').find('tr:gt(0)').toArray()
  for (let i = 0; i < rows.length; i++) {
    let row = $(rows[i]).find('td').toArray()
    let daySkip = parseInt($(row[1]).html())
    let midPoint = parseFloat($(row[2]).html())
    let finalPoint = parseFloat($(row[3]).html())

    if (daySkip > 3) {
      console.log('called')
      $(row[4]).html('0')
      $(row[5]).html('F')
      continue
    }

    let tkPoint = Math.round((0.4*midPoint + 0.6*finalPoint) * 10) / 10
    $(row[4]).html(tkPoint)
    if (tkPoint < 4) {
      $(row[5]).html('F')
    } else if (tkPoint < 5) {
      $(row[5]).html('D')
    } else if (tkPoint < 5.5) {
      $(row[5]).html('D+')
    } else if (tkPoint < 6.5) {
      $(row[5]).html('C')
    } else if (tkPoint < 7) {
      $(row[5]).html('C+')
    } else if (tkPoint < 8) {
      $(row[5]).html('B')
    } else if (tkPoint < 8.5) {
      $(row[5]).html('B+')
    } else if (tkPoint < 9) {
      $(row[5]).html('A')
    } else {
      $(row[5]).html('A+')
    }
  }
}