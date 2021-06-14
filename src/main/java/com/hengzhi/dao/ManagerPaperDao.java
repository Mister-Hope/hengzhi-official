package com.hengzhi.dao;

import com.hengzhi.dto.ManagerPaper.ChangePapers;
import com.hengzhi.dto.ManagerPaper.UnChangePapers;
import com.hengzhi.dto.ManagerPaper.UnFinishPapers;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ManagerPaperDao {

    /*
    待改试卷数据
     */
    List<UnChangePapers> selectUnChange();
    /*
    待改试卷的份数
     */
     int selectUnChangeNumber();
     /*
     已改试卷数据
      */
     List<ChangePapers> selectChange();
     /*
     未考试卷信息
      */
     List<UnFinishPapers> selectUnFinish();
}