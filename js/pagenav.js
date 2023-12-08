function pagination_url(number) {
    var path = config.archive_dir;
    
    // dirty quick fix, avoid double (//)
    if (path=='/') { path = '' }
  
    if (number>1) {
        path = path + '/' + config.pagination_dir + '/' + number;
    }
  
    return url_for(path);
  }