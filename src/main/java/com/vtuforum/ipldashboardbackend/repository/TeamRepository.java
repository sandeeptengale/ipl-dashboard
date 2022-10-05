package com.vtuforum.ipldashboardbackend.repository;

import com.vtuforum.ipldashboardbackend.model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long> {
    Team findByTeamName(String teamName);
}
